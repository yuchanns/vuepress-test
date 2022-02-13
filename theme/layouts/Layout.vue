<template>
<div class="wrapper">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <p>Hello Layout.</p>
    <Content />
</div>
</template>

<style>
body {
    margin: 0;
    color: #000000de;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: .00938em;
}

.wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 39rem;
    padding: 2.4375rem 1.21875rem;
}

a {
    margin: 4px;
}
</style>
