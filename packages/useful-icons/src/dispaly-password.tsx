import { defineComponent } from 'vue'

const DisplayPassword = defineComponent({
  setup() {
    return () => (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        viewBox="0 0 48 48"
        tabindex="0"
      >
        <path
          d="M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
          clip-rule="evenodd"
        ></path>
        <path d="M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path>
      </svg>
    )
  }
})

export default DisplayPassword
