const SPEED = 0.02;

export default class Paddle {
  constructor(paddleElement) {
    this.paddleElement = paddleElement;
    this.reset();
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElement).getPropertyValue("--position")
    );
  }

  set position(value) {
    this.paddleElement.style.setProperty("--position", value);
  }

  rect() {
    return this.paddleElement.getBoundingClientRect();
  }

  reset() {
    this.position = 50;
  }

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position);
  }
}
