---
title: Changelog
---

## v5.0.2

###### Nov 4, 2021

- Reduce compile time
- Update layout strategy

## v5.0.1

###### Nov 3, 2021

- Fix auth guard redirect bug

## v5.0.0

###### Nov 2, 2021

- Migrate `CRA` to `Next.js 12`
- Migrate code to MUI v5
- Add `Company Details` pages
- Add `Job Create` flow
- Add `Job Listing` page
- Add `Logistics Dashboard` page
- Cleanup code
- Remove `react-modal-image` dependency
- Update `Account` pages
- Update `Blog Platfrom` page designs
- Update `Calendar` app layout
- Update `Chat` app layout
- Update `Chat` logic
- Update `Customer Details` page
- Update `Customer List` filters
- Update `Invoice List` filters
- Update `Invoice List` page layout
- Update `Kaban` app
- Update `Landing` page
- Update `Mail` app layout
- Update `Order List` filters
- Update `Order List` page layout
- Update `Product List` filters
- Update `Product List` table
- Update design system

---

## v4.1.0

###### May 24, 2021

- Add Sketch and Figma dark versions
- Add `react-hot-toast` dependency
- Fix Calendar App `Date` data type stored in Redux state warning
- Fix Kanban App card move bug
- Fix RTL bug
- Fix `nprogress` display bug
- Implement mocked api clients instead of mocked axios interceptors
- Remove `axios` and `axios-mock-adapter` dependencies
- Remove `notistack` dependency
- Remove `web-vitals` dependency
- Replace `Hidden` component with `sx` logic
- Update `material-ui` and other dependencies

---

## v4.0.0

###### Mar 17, 2021

- Add `@emotion/react` and `@emotion/styled` dependencies
- Add `AWS Amplify` auth platform
- Add `Google Tag Manager` to implement tags concept
- Add `StrictMode`
- Add `date-fns` dependency to parse dates
- Add `gray-matter` dependency
- Add `react-i18next` dependency to implement multi-language
- Add `stylis` and `stylis-plugin-rtl` dependencies
- Add `web-vitals` dependency
- Add new components
- Add new pages
- Drop `IE11` support
- Fix some TS types
- Implement `sx` prop where needed
- Regroup pages
- Remove `Google Analytics`
- Remove `js-cookie` dependency
- Remove `jsonwebtoken` dependency
- Remove `jwt-decode` dependency
- Remove `lodash` dependency
- Remove `mdx` dependency
- Remove `moment` dependency
- Remove `react-chartjs-2` dependency
- Remove `uuid` dependency
- Rename components for simpler folder structure
- Replace `moment` with `date-fns`
- Replace `react-chartjs-2` with `react-apexcharts`
- Replace `react-helmet` with `react-helmet-async` dependency
- Replace `useStyles` with `experimentalStyled` strategy
- Update `@fullcalendar` dependency
- Update `@material-ui/core` and `@material-ui/icons` dependencies
- Update `react-router` to v6
- Update existing components to match Material-UI v5
- Update theme to use Material-UI v5 theme format

## v3.1.0

###### Aug 1, 2020

### JavaScript

`JavaScript` version is now in sync with the `TypeScript` version, both with the same features.

### TypeScript

No changes.

---

## v3.0.0

###### July 26, 2020

The release introduces a new version of the product written in `TypeScript`.

### JavaScript

No changes.

### TypeScript

- Fix server-side rendering issue with SettingsProvider
- Implement `Auth0` and `Firebase Authentication`
- Improve components
- Reimplement `JWT Auth` using `Redux Context API`
- Reimplement Redux using `Redux Toolkit`
- Remove a few components `Social` platform to be able to add new ones in future updates
- Update `Login` and `Register` pages
- Update `Calendar` and `Chat` apps
- Update dependencies
- Update mocked chart to match the types
- Update `Projects` platform

---

## v2.0.0

###### Apr 10, 2020

- Add `apexcharts` dependency
- Add `formik` dependency
- Add `immer` dependency
- Add `joy` dependency
- Add `mdx` dependency
- Add `notistack` dependency
- Add `react-modal-image` dependency
- Add new pages
- Implement Redux in `Chat`, `Kanban`, `Mail` apps
- Implement `AuthService` and `AuthGuard`
- Implement app settings manager
- Implement multiple themes
- Refactor components to accept multi-theme
- Remove multiple css classes and replaced the styling with `Box` component
- Update all pages implementing new Material-UI features
- Update docs to use `mdx`
- Update the mock adapter, now accepting post requests
- Update typography

---

## v1.4.0

###### Feb 25, 2020

- Fix `uuid` import bug
- Update dependencies

---

## v1.3.0

###### Sep 7, 2019

- Add component pages
- Add `eslint-config-airbnb` dependency
- Add `eslint-config-prettier` dependency
- Add `eslint-plugin-import` dependency
- Add `eslint-plugin-jsx-a11y` dependency
- Add `eslint-plugin-react-hooks` dependency
- Add `IE11` support
- Add `Container` component to each page to replace custom styling
- Add `RT`L support
- Fix a bug for Edge & Safari where users couldn't scroll properly
- Remove deep folder nesting to keep a clean structure
- Replace custom `useRouter` hook with `useLocation`, `useHistory` and `useParams`
  from `react-router`
- Update code style to match with Airbnb style
- Update dependencies
- Update import paths
- Update the layouts to fix scroll issues

---

## v1.2.0

###### Aug 7, 2019

- Add `axios` and `axios-mock-adapter` modules to simulate server response for fetch requests
- Create 3 individual layouts for error, auth and dashboard pages
- Fix navigation expand issue
- Move helpers files to `utils` folder
- Move all lib mixins to `mixins` folder
- Remove `chart.js` files
- Remove unused helpers
- Remove unused utils
- Rename few components
- Replace the routing system from 1.1.0 version with an easier solution
- Update `Calendar` page code
- Update `Chat` page code
- Update `Error` page code

---

## v1.1.1

###### Aug 1, 2019

- Remove `PerfectScrollBar` to fix `Navbar` and content scroll issues

---

## v1.1.0

###### July 31, 2019

- Add `Figma` source files
- Add `PrismJS` dependency
- Add `redux` dependency
- Change the layout logic
- Create `CodeBlock` component
- Create changelog page
- Create documentation pages
- Fix scroll bugs
- Implement `redux` in some components
- Implement code splitting to lazy load pages
- Implement layout system based on route settings
- Implement route authorization guard based on authenticated user role and route settings
- Implement routing system
- Merge layouts in one layout only that can be configured dynamically
- Rename few components
- Replace `underscore` with `lodash`
- Update dependencies
- Update folder structure, grouped all pages in the same folder
- Update presentation page

---

## v1.0.0

###### July 20, 2019

Initial release.
