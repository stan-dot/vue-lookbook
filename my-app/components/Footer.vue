<template>
  <nav class="footer">
    <p>
      <a href='https://stan.place'>Main portfolio</a>
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
  </nav>
</template>
<style scoped>
.footer {
  font-size: small;
  display: flex;
  flex-direction: row;
  border: 1px;
  justify-items: auto;
  background-color: rgb(50, 50, 50);
  width: 100%;
  position: sticky;
  bottom: 0;
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
</style>