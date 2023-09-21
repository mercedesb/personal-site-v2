import React from "react"

export function NewsletterSignup({ onBlogPost }) {
  let formId = 5626825 // landing page form
  if (onBlogPost) {
    formId = 5608759 // blog post form
  }


return (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form
        action={`https://app.convertkit.com/forms/${formId}/subscriptions`}
        class="seva-form formkit-form flex flex-col w-full"
        method="post"
        data-sv-form="5608759"
        data-uid="6526492aad"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div class="formkit-background" style={{opacity: 0.2}}></div>
        <div data-style="minimal">
          { onBlogPost && (
            <>
              <div
                class="formkit-header"
                data-element="header"
              >
                <h2 class="text-xl">Well-Rounded Dev</h2>
              </div>
              <div
                class="formkit-subheader"
                data-element="subheader"
                >
                <p>Liked this post? Subscribe to receive semi-regular thoughts by email.</p>
              </div>
            </>
          )}
          <ul
            class="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="false"
            class="seva-fields formkit-fields"
          >
            <label className="formkit-field flex flex-col lg:w-3/4">
              <span>First Name</span>
              <input
                class="formkit-input mb-8 p-2 dark:text-brown-900"
                name="fields[first_name]"
              ></input>
            </label>
            <label className="formkit-field flex flex-col lg:w-3/4">
              <span>Email</span>
              <input
                class="formkit-input mb-8 p-2 dark:text-brown-900"
                name="email_address"
                required=""
                type="email"
              ></input>
            </label>
            <div class="flex items-center">
              <button
                data-element="submit"
                className="formkit-submit formkit-submit px-3 py-3 border rounded-sm w-40 self-end bg-green-500 text-brown-100 font-bold"
              >
                <div class="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span class="">Subscribe</span>
              </button>
              <div
                class="formkit-guarantee ml-8"
                data-element="guarantee"
              >
                <p class="text-xs mb-0">I won't send you spam. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}