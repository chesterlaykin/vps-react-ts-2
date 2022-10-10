export {};

declare global {
  namespace JSX {
    type Props = {
      children: React.ReactNode;
      [x: string]: any;
    };
  }
}
