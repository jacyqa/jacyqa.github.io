let lastSrcs;

const scriptRag = /\<script.*src=[" '](?<src>[^" ']+)/gm;

async function extractNewScripts() {
  const html = await fetch(`/?_timestamp${Date.now()}`)
    .then((resp) => resp.text())
    .catch((err) => alartToRefresh());
  scriptRag.lastIndex = 0;
  let result = [];
  let match;
  while ((match = scriptRag.exec(html))) {
    result.push(match.groups.src);
  }
  return result;
}

async function needLoad() {
  const NewScripts = await extractNewScripts();
  if (!lastSrcs) {
    lastSrcs = NewScripts;
    return false;
  }
  let result = false;
  if (lastSrcs.length !== NewScripts.length) {
    result = true;
  }
  for (let i = 0; i < NewScripts.length; i++) {
    if (lastSrcs[i] !== NewScripts[i]) {
      result = true;
      break;
    }
  }
  lastSrcs = NewScripts;
  return result;
}
const duration = 5000;

function alartToRefresh() {
  const result = confirm(
    "检测到可能有新的脚本，是否刷新页面？(取消后将不再检测更新)",
  );
  if (result) {
    location.reload();
  } else {
    autoRefresh = () => {};
  }
}
function autoRefresh() {
  setTimeout(async () => {
    const willUpdate = await needLoad();
    if (willUpdate) {
      alartToRefresh();
    }
    autoRefresh();
  }, duration);
}
autoRefresh();
