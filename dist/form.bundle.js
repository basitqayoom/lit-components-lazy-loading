"use strict";(self.webpackChunklit_lazy_observer=self.webpackChunklit_lazy_observer||[]).push([[680],{582:(e,t,r)=>{var s=r(897),a=r(95),o=function(e,t,r,s){var a,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(n=(o<3?a(n):o>3?a(t,r,n):a(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n},n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends s.oi{constructor(){super(...arguments),this.username="",this.password=""}render(){return s.dy`
        <form @submit=${this.onSubmit}>
            <label for="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            value=${this.username}
            @input=${e=>this.username=e.target.value}
            />

            <label for="password">Password:</label>
            <input
            type="password"
            id="password"
            name="password"
            value=${this.password}
            @input=${e=>this.password=e.target.value}
            />

            <button type="submit">Submit</button>
        </form>
        `}onSubmit(e){e.preventDefault();const t=new FormData(e.target),r={};t.forEach(((e,t)=>{r[t]=e})),alert(`Username is ${this.username} & Password is ${this.password} `)}};o([(0,a.Cb)({type:String}),n("design:type",Object)],i.prototype,"username",void 0),o([(0,a.Cb)({type:String}),n("design:type",Object)],i.prototype,"password",void 0),i=o([(0,a.Mo)("pw-form")],i)}},e=>{e(e.s=582)}]);