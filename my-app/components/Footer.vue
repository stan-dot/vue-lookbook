<template>
  <footer class="fits-mobile">
    <nav class="footer">
      <p>
        <NuxtLink to='https://stan.place'>Main portfolio</NuxtLink>
      </p>
      <p>
        <NuxtLink to=" https://github.com/stan-dot/vue-lookbook"> Source code (GitHub)</NuxtLink>
      </p>
      <p>
        This project is a demo application built to showcase development skills and is not associated, affiliated, or
        endorsed by any brand. All images and product details are used for demonstrative purposes only.
      </p>
      <p>Newsletter</p>
      <p>Terms of use</p>
      <p>Privacy policy</p>
      <p>Copyright notice</p>
      <p>Provide Feedback</p>
      <p>Images are from lexica.art</p>
      <p>The emoji graphics are from the open source project Twemoji. The graphics are copyright 2020 Twitter, Inc and
        other contributors. The graphics are licensed under CC-BY 4.0. Favicon</p>
    </nav>
  </footer>
</template>

<style scoped>
@media (max-width: 720px) {
  .fits-mobile {
    padding: 0;
    width: 90vw;
    margin: 10px;
  }
}

footer {
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 8px;
  max-width: 100vw;
  box-sizing: border-box;
  margin-bottom: 0;
  padding-bottom: 0;
}

.footer {
  font-size: small;
  display: flex;
  flex-direction: row;
  border: 1px;
  justify-items: auto;
  background-color: rgb(50, 50, 50);
}

.footer>p {
  margin-right: 4px;
  margin-left: 4px;
  color: rgb(249, 247, 242);
}

a {
  margin-right: 6px;
  margin-left: 2px;
  color: rgb(249, 247, 242);
}

@media (max-width: 768px) {
  .footer {
    width: 100%;
    padding: 4px;
    flex-direction: column;
    font-size: small;
  }
}
</style>