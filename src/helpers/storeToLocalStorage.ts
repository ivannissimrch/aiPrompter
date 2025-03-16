import { PrevConversations } from "@/app/components/Form";

export default function storeToLocalStorage(
  identifier: string,
  value: PrevConversations[]
) {
  localStorage.setItem(identifier, JSON.stringify(value));
}
