import { Controller } from "@hotwired/stimulus"

// Toggles between truncated and full content
export default class extends Controller {
  static targets = ["truncated", "full", "moreLabel", "lessLabel"]

  toggle() {
    // Toggle visibility classes
    this.truncatedTarget.classList.toggle("hidden")
    this.fullTarget.classList.toggle("hidden")
    if (this.hasMoreLabelTarget && this.hasLessLabelTarget) {
      this.moreLabelTarget.classList.toggle("hidden")
      this.lessLabelTarget.classList.toggle("hidden")
    }
  }
}
