import { prisma } from "$lib";
import { fail} from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({cookies}) => {

    const userId = cookies.get("id");

    if (userId) {
        throw redirect(307, "/Marknad");
    }

    return {};
}) satisfies PageServerLoad;



export const actions: Actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        let username = data.get("username")?.toString();
        let password = data.get("password")?.toString();

        const userId = cookies.get("id");

        if (userId) {
            throw redirect(307, "/Marknad");
        }

        if (!username || !password) {
            return fail(400, { login_fail: "Skriv in ett användarnamn samt ett lösenord tack 🖕" });
        }

        let user = await prisma.user.findUnique({ where: { username:username } });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    username,
                    password,
                }
            });
        }

        if (user) {
            if (user.password === password) {
                cookies.set("id", user.id, { secure: false, path: "/Marknad" });
                throw redirect(307, "/Marknad");
            } else {
                return fail(400, { login_fail: "Felaktigt lösenord" });
            }
        } 

    }
} satisfies Actions;
