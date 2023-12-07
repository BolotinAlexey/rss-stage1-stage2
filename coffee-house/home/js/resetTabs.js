export default function resetTabs(tabs) {
  tabs.forEach((tab) => {
    console.log(tab);
    tab.value = 0;
  });
}
