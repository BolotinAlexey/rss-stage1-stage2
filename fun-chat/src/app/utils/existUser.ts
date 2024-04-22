export default function existUser(): string {
  const user = document.querySelector(".message__status-user");
  return user && user.textContent ? user.textContent : "";
}
