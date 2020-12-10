import { configure } from '@storybook/react'


const req = require.context('../stories', true, /.stories.tsx?$/)

configure(req, module)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}