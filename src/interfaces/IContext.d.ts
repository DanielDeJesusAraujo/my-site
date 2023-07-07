interface IContext {
  state: any;
  setState: React.Dispatch<React.SetStateAction<undefined>>;
}

export default IContext;