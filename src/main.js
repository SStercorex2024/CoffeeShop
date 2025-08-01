import OverlayManu from "@/modules/OverlayManu"
import SlidersCollection from "@/modules/SlidersCollection"
import SwapCards from "@/modules/useSwapCards"

new SwapCards(".questbook__cards")
new OverlayManu()
document.addEventListener("DOMContentLoaded", () => {
  new SlidersCollection()
})
