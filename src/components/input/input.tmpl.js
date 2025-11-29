export default `
<div class="input-wrapper {{wrapperClassName}}">
  {{#if label}}
  <label class="input-label" for="{{name}}">{{label}}</label>
  {{/if}}
  <input 
    class="input {{className}}"
    type="{{type}}"
    name="{{name}}"
    id="{{name}}"
    placeholder="{{placeholder}}"
    {{#if value}}value="{{value}}"{{/if}}
    {{#if required}}required{{/if}}
  />
  {{#if error}}
  <span class="input-error">{{error}}</span>
  {{/if}}
</div>
`;

