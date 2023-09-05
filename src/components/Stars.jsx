import { GoStarFill } from "react-icons/go";

const stars = Array(5).fill(1);

export function Stars(rating) {
  return stars.map((_, i) => (
    <GoStarFill className={+rating <= i ? "not-filled" : " "} key={i} />
  ));
}
