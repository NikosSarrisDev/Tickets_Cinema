import { SetMetadata } from "@nestjs/common";


//Με αυτότοτ decorator σιγκεκριμένα endpoints πορούν να γίνουν public δηλάδή
//να μην χρειάζεται ο χρήστης να είναι authenticated
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);