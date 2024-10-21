import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pos-getting-started',
  styleUrl: 'pos-getting-started.css',
  shadow: true,
})
export class PosGettingStarted {
  render() {
    return (
      <Host>
        <div>
          <h2>Getting started 🚀</h2>
          <p>🔎 Enter a URL into the above navigation bar to browse through the web of data. </p>
          <p>🔐 Sign in to access private resources on your Solid Pod or those of your friends or coworkers.</p>
        </div>
        <div>
          <p class="question">New to Solid?</p>
          <p>
            <a href="https://solidproject.org/for-developers#hosted-pod-services">Get a Pod &rarr;</a>
          </p>
        </div>
        <div>
          <p class="question">Want to dig deeper into PodOS?</p>
          <p>
            <a href="http://pod-os.org">Learn more &rarr;</a>
          </p>
        </div>
      </Host>
    );
  }
}
