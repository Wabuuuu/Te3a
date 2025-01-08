import { prisma } from "$lib";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {

   
    let game = await prisma.games.findUniqueOrThrow({where:{id:params.result}});
    
    return { game };
}) satisfies PageServerLoad;