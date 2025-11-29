export default `
<div class="message {{#if isOwn}}message--own{{else}}message--other{{/if}}">
  <div class="message-text">{{text}}</div>
  <div class="message-time">{{time}}</div>
</div>
`;

