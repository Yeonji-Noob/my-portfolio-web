import { Button, ScrollView } from "react95";
import { GuestLists } from ".";

export const GuestListBox = () => {



  return (
    <>
      <Button style={{ marginBottom: '10px', fontFamily: 'NeoDungGeunMo' }}>
        방명록 남기기
      </Button>

      <ScrollView style={{ padding: '0.2rem', minWidth: '260px', height: '370px', fontFamily: 'NeoDungGeunMo', backgroundColor: 'lightyellow' }}>

        <GuestLists />

      </ScrollView >
    </>
  );
}