import React from "react";
import Container from "../../components/Container";
function Contact() {
  return (
      <Container>
        <div className="card">
          <div className="card-body">
            <h2>Contact Me</h2>
            <hr />
            <form>
              <div class="form-group">
                <label for="exampleInputName1">Name</label>
                <input
                  type="input"
                  class="form-control"
                  id="exampleInputName1"
                  placeholder="Name"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputMessage1">Message</label>
                <textarea
                  type="input"
                  class="form-control"
                  id="exampleInputMessage1"
                  placeholder="Message"
                  row="5"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
  );
}
export default Contact;
