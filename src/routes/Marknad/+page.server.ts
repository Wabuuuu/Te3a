import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/index";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ cookies }) => {

    const userId = cookies.get("id");

    if (!userId) {
        throw redirect(307, "/login");
    }

    let product = await prisma.product.findMany();
    return { product };
}) satisfies PageServerLoad;

export const actions: Actions = {
    create: async ({ request, cookies }) => {
  
        const userId = cookies.get("id");
        
        //Om man inte är inloggad och försöker gå till Marknad så skickas man till Login sidan.
        if (!userId) {
            throw redirect(307, "/login");
        }
        
        const data = await request.formData();
        const name = data.get("balle")?.toString() ?? "lol";
        const price = data.get("price")?.toString() ?? "lol";
        const desc = data.get("desc")?.toString() ?? "lol";

        await prisma.product.create({
            data: { name: name, price: price, description: desc }
        });
    }
} satisfies Actions;