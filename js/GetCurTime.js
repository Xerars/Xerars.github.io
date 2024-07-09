//File: GetCurTime.js


function Update_CurTime()
{
  const now = new Date();   //取得時間
  const time_str = now.toLocaleTimeString();   //轉換為字串
  document.getElementById('CurTime').textContent = time_str;
}

setInterval(Update_CurTime,1000)    //每秒更新一次
Update_CurTime();                   //初始調用則立即更新時間