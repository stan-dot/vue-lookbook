<template>
  <footer>


    <nav class="footer">
      <p>
        <NuxtLink to='https://stan.place'>Main portfolio</NuxtLink>
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
      <p>Images are from lexica.com</p>
      <p>The emoji graphics are from the open source project Twemoji. The graphics are copyright 2020 Twitter, Inc and
        other contributors. The graphics are licensed under CC-BY 4.0. Favicon</p>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
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
  margin-right: 6px;
  margin-left: 2px;
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
    flex-direction: column;
  }
}
</style>