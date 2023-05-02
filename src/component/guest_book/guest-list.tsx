import { Button, ScrollView, Avatar, Separator } from "react95";
// import style from "styled-components";


// const Flexdiv = style.div`

// display: flex;

// `;

export const GuestList = () => {
  return (
    <>
      <Button style={{ marginBottom: '10px' }}>
        방명록 남기기
      </Button>
      <ScrollView style={{ padding: '1rem', width: '255px', height: '370px' }}>
        <div style={{ display: 'flex', width: '211px', height: '70px', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar size={50} src='https://placekitten.com/100/100' style={{ marginRight: '10px' }} />
          <p style={{ width: '160px', display: 'inline' }}>야옹</p>
        </div>
        <Separator />
      </ScrollView>
    </>
  );
}