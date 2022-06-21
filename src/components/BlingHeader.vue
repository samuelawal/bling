<template>
  <section>
    <b-navbar
      toggleable="lg"
      type="light"
      class="mb-5 border-bottom"
      fixed="top"
    >
      <div class="container">
        <b-navbar-brand to="/" class="fw-bold brand"
          ><span class="brand">BLING</span></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ms-auto">
            <b-nav-item to="/cartList">
              <b-icon icon="cart-4" font-scale="2"></b-icon>
            </b-nav-item>
            <b-nav-form> </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <b-container class="pad-5">
      <slot></slot>
    </b-container>
  </section>
</template>
<script>
export default {};
</script>
