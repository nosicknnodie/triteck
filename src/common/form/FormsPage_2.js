// 출처 : https://www.itsolutionstuff.com/post/react-email-validation-exampleexample.html

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../../common/form/contentFont.css";

class FormsPage_2 extends React.Component {
  constructor() {
    super();

    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;

    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};

      input["name"] = "";
      input["email"] = "";
      input["comment"] = "";

      this.setState({ input: input });

      alert("문의사항이 접수 되었으며 관리자 확인 후 연락 드리겠습니다.");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "이름을 다시 확인하여 주십시오.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "이메일을 다시 확인하여 주십시오.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      );

      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "이메일 형식을 다시 확인하여 주십시오.";
      }
    }

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "이메일 내용 본문을 다시 확인하여 주십시오.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div>
        <title2Light>Contact us</title2Light>
        <br />
        <br />
        {/* <h1>고객문의</h1> */}
        <form action="https://formspree.io/f/xleajayg" method="POST">
          {/* <form action="https://formspree.io/f/xdoyeyvn" method="POST" onSubmit={this.handleSubmit}> */}

          <div class="form-group">
            <label for="name">Name:</label>

            <input
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control"
              // placeholder="Enter name"
              id="name"
            />

            <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div class="form-group">
            <label for="email">E-Mail:</label>

            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control"
              // placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div class="form-group">
            <label for="comment">Comment:</label>

            <textarea
              name="comment"
              value={this.state.input.comment}
              onChange={this.handleChange}
              // placeholder="Enter comment"
              class="form-control"
            />

            <div className="text-danger">{this.state.errors.comment}</div>
          </div>

          <input type="submit" value="SEND" class="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default FormsPage_2;
