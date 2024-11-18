import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      svg {
        display: block;
        vertical-align: middle;
      }
      svg {
        shape-rendering: auto;
        text-rendering: optimizeLegibility;
      }
      pre {
        background-color: rgba(55, 65, 81, 1);
        border-radius: 0.25rem;
        color: rgba(229, 231, 235, 1);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        overflow: auto;
        padding: 0.5rem 0.75rem;
      }
      .shadow {
        box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .rounded {
        border-radius: 1.5rem;
      }
      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
      #hero {
        align-items: center;
        background-color: hsla(214, 62%, 21%, 1);
        border: none;
        box-sizing: border-box;
        color: rgba(55, 65, 81, 1);
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }
      #hero .text-container {
        color: rgba(255, 255, 255, 1);
        padding: 3rem 2rem;
      }
      #hero .text-container h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        position: relative;
      }
      #hero .text-container h2 svg {
        color: hsla(162, 47%, 50%, 1);
        height: 2rem;
        left: -0.25rem;
        position: absolute;
        top: 0;
        width: 2rem;
      }
      #hero .text-container h2 span {
        margin-left: 2.5rem;
      }
      #hero .text-container a {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 0.75rem;
        color: rgba(55, 65, 81, 1);
        display: inline-block;
        margin-top: 1.5rem;
        padding: 1rem 2rem;
        text-decoration: inherit;
      }
      #hero .logo-container {
        display: none;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      #hero .logo-container svg {
        color: rgba(255, 255, 255, 1);
        width: 66.666667%;
      }
      #middle-content {
        align-items: flex-start;
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }
      #middle-content #middle-left-content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      #learning-materials {
        padding: 2.5rem 2rem;
      }
      #learning-materials h2 {
        font-weight: 500;
        font-size: 1.25rem;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .list-item-link {
        align-items: center;
        border-radius: 0.75rem;
        display: flex;
        margin-top: 1rem;
        padding: 1rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 100%;
      }
      .list-item-link svg:first-child {
        margin-right: 1rem;
        height: 1.5rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 1.5rem;
      }
      .list-item-link > span {
        flex-grow: 1;
        font-weight: 400;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .list-item-link > span > span {
        color: rgba(107, 114, 128, 1);
        display: block;
        flex-grow: 1;
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 1rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .list-item-link svg:last-child {
        height: 1rem;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 1rem;
      }
      .list-item-link:hover {
        color: rgba(255, 255, 255, 1);
        background-color: hsla(162, 55%, 33%, 1);
      }

      .list-item-link:hover > span > span {
        color: rgba(243, 244, 246, 1);
      }
      .list-item-link:hover svg:last-child {
        transform: translateX(0.25rem);
      }

      .button-pill {
        padding: 1.5rem 2rem;
        margin-bottom: 2rem;
        transition-duration: 300ms;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        align-items: center;
        display: flex;
      }
      .button-pill svg {
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        flex-shrink: 0;
        width: 3rem;
      }
      .button-pill > span {
        letter-spacing: -0.025em;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .button-pill span span {
        display: block;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.25rem;
      }
      .button-pill:hover svg,
      .button-pill:hover {
        color: rgba(255, 255, 255, 1) !important;
      }
      .nx-console:hover {
        background-color: rgba(0, 122, 204, 1);
      }
      .nx-console svg {
        color: rgba(0, 122, 204, 1);
      }
      .nx-console-jetbrains {
        margin-top: 2rem;
      }
      .nx-console-jetbrains:hover {
        background-color: rgba(255, 49, 140, 1);
      }
      .nx-console-jetbrains svg {
        color: rgba(255, 49, 140, 1);
      }
      #nx-repo:hover {
        background-color: rgba(24, 23, 23, 1);
      }
      #nx-repo svg {
        color: rgba(24, 23, 23, 1);
      }
      #nx-cloud {
        margin-bottom: 2rem;
        margin-top: 2rem;
        padding: 2.5rem 2rem;
      }
      #nx-cloud > div {
        align-items: center;
        display: flex;
      }
      #nx-cloud > div svg {
        border-radius: 0.375rem;
        flex-shrink: 0;
        width: 3rem;
      }
      #nx-cloud > div h2 {
        font-size: 1.125rem;
        font-weight: 400;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      #nx-cloud > div h2 span {
        display: block;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.25rem;
      }
      #nx-cloud p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-top: 1rem;
      }
      #nx-cloud pre {
        margin-top: 1rem;
      }
      #nx-cloud a {
        border-radius: 0.75rem;
        color: white;
        background-color: hsla(214, 62%, 21%, 1);
        display: inline-block;
        margin-top: 1.5rem;
        padding: 0.5rem 1rem;
        text-align: left;
        text-decoration: inherit;
      }

      #commands {
        padding: 2.5rem 2rem;
        margin-top: 3.5rem;
      }
      #commands h2 {
        font-size: 1.25rem;
        font-weight: 400;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      #commands p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      details {
        align-items: center;
        display: flex;
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
      }
      details pre > span {
        color: rgba(181, 181, 181, 1);
      }
      summary {
        border-radius: 0.5rem;
        display: flex;
        font-weight: 400;
        padding: 0.5rem;
        cursor: pointer;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      summary:hover {
        background-color: rgba(243, 244, 246, 1);
      }
      summary svg {
        height: 1.5rem;
        margin-right: 1rem;
        width: 1.5rem;
      }
      #love {
        color: rgba(107, 114, 128, 1);
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 3.5rem;
        opacity: 0.6;
        text-align: center;
      }
      #love svg {
        color: rgba(252, 165, 165, 1);
        width: 1.25rem;
        height: 1.25rem;
        display: inline;
        margin-top: -0.25rem;
      }
      @media screen and (min-width: 768px) {
        #hero {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #hero .logo-container {
          display: flex;
        }
        #middle-content {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 4rem;
        }
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome To Penny 👋
          </h1>
        </div>
        <!--  HERO  -->

        <!--  MIDDLE CONTENT  -->
        <div id="middle-content">
          <div id="other-links">
            <a
              class="button-pill rounded shadow nx-console"
              href="//localhost:4200/signup"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Visual Studio Code</title>
                <path
                  d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
                />
              </svg>
              <span>
                Signup
                <span>Signup to Penny Software</span>
              </span>
            </a>
            <a
              class="button-pill rounded shadow nx-console-jetbrains"
              href="//localhost:4200/signin"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                height="48"
                width="48"
                viewBox="20 20 60 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m22.5 22.5h60v60h-60z" />
                <g fill="#fff">
                  <path d="m29.03 71.25h22.5v3.75h-22.5z" />
                  <path
                    d="m28.09 38 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.44 1.06-1.31v-5.98h2.58v6a3.48 3.48 0 0 1 -.87 2.6 3.56 3.56 0 0 1 -2.57.95 3.84 3.84 0 0 1 -3.34-1.55z"
                  />
                  <path
                    d="m36 30h7.53v2.19h-5v1.44h4.49v2h-4.42v1.49h5v2.21h-7.6z"
                  />
                  <path d="m47.23 32.29h-2.8v-2.29h8.21v2.27h-2.81v7.1h-2.6z" />
                  <path
                    d="m29.13 43.08h4.42a3.53 3.53 0 0 1 2.55.83 2.09 2.09 0 0 1 .6 1.53 2.16 2.16 0 0 1 -1.44 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.61-1.31 2.59-3.55 2.59h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.24c.79 0 1.25-.26 1.25-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86 0-.5-.4-.87-1.27-.87z"
                  />
                  <path
                    d="m38 43.08h4.1a4.19 4.19 0 0 1 3 1 2.93 2.93 0 0 1 .9 2.19 3 3 0 0 1 -1.93 2.89l2.24 3.27h-3l-1.88-2.84h-.87v2.84h-2.56zm4 4.5c.87 0 1.39-.43 1.39-1.11 0-.75-.54-1.12-1.4-1.12h-1.44v2.26z"
                  />
                  <path
                    d="m49.59 43h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.69h-2.71zm2.27 5.73-1-2.65-1.06 2.65z"
                  />
                  <path d="m56.46 43.05h2.6v9.37h-2.6z" />
                  <path
                    d="m60.06 43.05h2.42l3.37 5v-5h2.57v9.37h-2.26l-3.53-5.14v5.14h-2.57z"
                  />
                  <path
                    d="m68.86 51 1.45-1.73a4.84 4.84 0 0 0 3 1.13c.71 0 1.08-.24 1.08-.65 0-.4-.31-.6-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.37-3 3.62-3a5.89 5.89 0 0 1 3.86 1.25l-1.26 1.84a4.63 4.63 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .42.32.61 1.63.91 2.14.46 3.44 1.16 3.44 2.91 0 1.91-1.51 3-3.79 3a6.58 6.58 0 0 1 -4.35-1.5z"
                  />
                </g>
              </svg>
              <span>
                Login
                <span>Sign in to our powerful platform!</span>
              </span>
            </a>
          </div>
        </div>
        <!--  COMMANDS  -->
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
