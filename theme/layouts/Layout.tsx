import { defineComponent } from 'vue'
import { Content, RouterLink } from '@vuepress/client'
import '../styles/main.css'

export default defineComponent({
  setup() {
    return () => (
      <div style="margin: 0 auto;">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <p>Hello Layout.</p>
      <Content />
      </div>
    )
  }
})

