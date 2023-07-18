import { Button, ScrollView } from "react95";
import { GuestLists } from ".";

export const GuestListBox = () => {

  const guestWarningWindowPopUp = () => {
    const aboutWindow = document.getElementById('guest-warning-window');
    if (aboutWindow !== null) {
      aboutWindow.style.display = 'block';
    }
  }

  return (
    <>
      <Button style={{ marginBottom: '10px', fontFamily: 'NeoDungGeunMo' }} onClick={guestWarningWindowPopUp} onTouchStart={guestWarningWindowPopUp}>
        방명록 남기기
      </Button>

      <ScrollView style={{ padding: '0.2rem', minWidth: '260px', height: '370px', fontFamily: 'NeoDungGeunMo', backgroundColor: 'lightyellow' }}>

        <GuestLists />

      </ScrollView >
    </>
  );
}