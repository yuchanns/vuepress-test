import { defineComponent } from 'vue'
import '../styles/main.css'

export default defineComponent({
  setup() {
    return () => (
      <div style="margin: 0 auto;">
        <p>404 Notfound</p>
      </div>
    )
  }
})

