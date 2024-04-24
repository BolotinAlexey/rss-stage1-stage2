export default function changeStatusOtherUser(user: {
  login: string;
  isLogined: boolean;
}) {
  const currentStatusUserHtml = document.querySelector(".message__status-user");
  const currentStatusUser = currentStatusUserHtml?.textContent;
  if (currentStatusUser !== user.login) return;
  const loginStatusHtml = document.querySelector(".message__status-status");
  const loginStatus = loginStatusHtml?.textContent;
  if (
    loginStatus === "inactive" &&
    user.isLogined &&
    loginStatusHtml instanceof HTMLElement
  ) {
    loginStatusHtml.style.color = "green";
    loginStatusHtml.textContent = "active";
  }
  if (
    loginStatus === "active" &&
    !user.isLogined &&
    loginStatusHtml instanceof HTMLElement
  ) {
    loginStatusHtml.style.color = "red";
    loginStatusHtml.textContent = "inactive";
  }
}
