import { prisma } from "$lib";
import type { PageServerLoad } from "./$types";

export const load = (async({ params }) => {
	let product = await prisma.product.findUnique({
    where: { 
      id: params.market   },
  });
	return {product};
	}) satisfies PageServerLoad;