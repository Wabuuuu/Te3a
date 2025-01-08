import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/index";
import { redirect } from "@sveltejs/kit";
import { Buffer } from "buffer";

export const load = (async ({ cookies }) => {

    const userId = cookies.get("id");

   

    
    let games = await prisma.games.findMany({});
    return { games };
}) satisfies PageServerLoad;

export const actions: Actions = {
    create: async ({ request }) => {
        
      
        
        
        const data = await request.formData();
        const character = data.get("character")?.toString() ?? "lol";
        const opponentCharacter = data.get("opponent")?.toString() ?? "lol";
        const Map = data.get("map")?.toString() ?? "lol";
        const result = data.get("result")?.toString() ?? "lol";
        const play_as = data.get("play_as")?.toString() ?? "lol";

        await prisma.games.create({
            data: { character: character, opponentCharacter: opponentCharacter, Map: Map, play_as: play_as, result: result}
            
        });
        /*let product = await prisma.product.create({
            data: { name: name, price: price, description: desc}
        });
        await prisma.image.create({
            data:{
                encoding: base64String,
                productId: product.id
            }
        })*/
    }
} satisfies Actions;

