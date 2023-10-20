export function Form() {
  return <form action="submit">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Claim your free trial</button>
          <p>By clicking the button, you are agreeing to our</p>
          <p>Terms and Services</p>
        </form>;
}
  