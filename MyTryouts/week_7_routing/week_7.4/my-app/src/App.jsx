import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, SumofAll } from './atom'


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
};


function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const sumofall = useRecoilValue(SumofAll);
 
  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]) 

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>
      <button>ME({sumofall})</button>

    </>
  )
}

export default App