import { apiHost } from "@/data/site";

const apiPath = '/api/works';

export async function getAllWorksData() {
  const res = await fetch(new URL(apiHost + apiPath));
  const works = await res.json();
  return works;
}
