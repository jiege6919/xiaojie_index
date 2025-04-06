<template>
  <footer>
    <div class="footer-left">
      小杰 © 2019-2025 | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2021020461号-2</a><br><a
        href="https://beian.mps.gov.cn/#/query/webSearch?code=51052102510649" target="_blank">川公网安备51052102510649号</a>
      <br>
      本人工作特殊，联系不上，请见谅！
      <br>
      浏览器建议 PC | Chrome，手机 | Via <br>👉 <a href="https://ipw.cn/ipv6webcheck/?site=www.yangjie.site/"
        target="_blank">本站支持 IPv6</a>
    </div>
    <div class="footer-right">
      <li style="display: flex; flex-direction: column; align-items: center;">
        <a href="https://jk.yangjie.site" target="_blank"><img style="width: 66px;" src="/src/assets/images/jk.svg"
            alt="网站监控" title="监控"></a>
        <a href="https://www.foreverblog.cn/go.html" target="_blank"><img src="/src/assets/images/222.png" alt="虫洞"
            title="虫洞"></a>
        <a href="https://cloud.tencent.com/login" target="_blank"><img src="/src/assets/images/txy.png" alt="腾讯云"
            title="腾讯云"></a>
      </li>
    </div>
  </footer>
</template>

<style>
.footer-left {
  width: 60%;
}

.footer-right li a img {
  width: 150px;
}

footer {
  display: flex;
  color: var(--main-text-color);
  font-size: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0 0 0;
}

.footer-right li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

@media screen and (max-width: 860px) {
  .footer-left {
    width: 100%;
  }

  .footer-right {
    display: none;
  }
}
</style>
