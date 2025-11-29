import Handlebars from 'handlebars';

export function templator(template: string, context: Record<string, unknown> = {}): string {
  if (typeof template !== 'string') {
    throw new Error('Template must be a string');
  }

  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(context);
}

export function registerPartial(name: string, template: string): void {
  Handlebars.registerPartial(name, template);
}

export function registerHelper(name: string, helper: Handlebars.HelperDelegate): void {
  Handlebars.registerHelper(name, helper);
}

export default templator;

