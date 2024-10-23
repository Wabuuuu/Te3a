import { redirect } from '@sveltejs/kit';
import { prisma } from "$lib/index";
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {

    const userId = cookies.get("id");

   
    if (!userId) {
        throw redirect(307, "/login");
    }

    return {
        authenticated: true 
    };

}) satisfies PageServerLoad;
