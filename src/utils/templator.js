import Handlebars from 'handlebars';

export function templator(template, context = {}) {
  if (typeof template !== 'string') {
    throw new Error('Template must be a string');
  }

  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(context);
}

export function registerPartial(name, template) {
  Handlebars.registerPartial(name, template);
}

export function registerHelper(name, helper) {
  Handlebars.registerHelper(name, helper);
}

export default templator;

