
type Props ={
    style:string,
    stspan:string
}


export default function Logo({style,stspan}:Props) {
  return (
      <h1 className={style}>
        <span className={stspan}>YKIS</span> store
      </h1>
  );
}
