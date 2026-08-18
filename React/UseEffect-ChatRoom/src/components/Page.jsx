//  in this component we learn how to fetch data from useEffect.
// example:- fetch data for selected users 
// so is example k liye hm user k liye specific data lekr aayege.
// to iske liye ek dropdown bnayege or jo bhi user hmne select krah uske respect API s data lekr aayege or jb tk data nhi aayega tb tk likhege loading or jaise hi data aa jayega hm us actual data ko show kr denge.


// also here we learn Race-Conditions.

import  { useEffect, useState } from 'react'
import {fetchDetails} from'./API'

const Page = () => {

    const[person,setPerson] = useState('pankaj')
        // to show user data - agar data aagya to dikha do vrna loading dikhado.

        const[bio,setBio] = useState(null)
        // here bio is used to pin the value for user details.or vo user ki detail aayegi api s.

            // useEffect(() => {
            //     setBio(null) // null value jb tk rhegi jb tk data nhi aayega or data APi s aayega.
            //     fetchDetails(person).then(result =>{
            //       setBio(result)
            //     })
            // },[person]) // ye useeffect jb chlega jb component mount hoga or  person ki value chng hogi to iske liye hmne dependency array lga diya [person]
            // line no 20-25 tk ye code h  api ko  fetch krne ka.
// yha p hm dummy API bnayege to yha p dummy API act as a external source for component.

              useEffect(() =>{
                 let request = true
                 setBio(null)
                fetchDetails(person).then(result =>{
                  if(request){
                  setBio(result)
                  }
                })
              return()=>{
                request = false
              }
              },[person])
  return (
    <div>
      <select  value={person} onChange={e => {setPerson(e.target.value)}}>
        <option value="pankaj">pankaj</option>
        <option value="khushi">khushi</option>
        <option value="raj">raj</option>
      </select>
      <hr />
      <p>{bio??'loading'}</p>
    </div>
  )
}

export default Page
// yha p hmne select tag lgake option dale h uske ander taki jo bhi option select ho use eventlistener k through pick kr lenge or usi particular value k liye datafetch kr lenge.
// to hme yha p ye krna h ki jb bhi option select ho to us particular option ki value utha kr set kr denge person ki current value m.
// ye ese hoga ki agar select tag k ander koi bhi option chng ho to chng wali value or current wali value ko utha kr person m daal denge.



// race-condition :- now we perform race condition  for ex:- output m jake jaise mene pankaj p click kra or uski output aane m vo 2 sec le rha h or output aane se phele hi mene raj p click kr diya to m chahti hu ki pankaj wali request cancel hojaye or raj ki output aajaye.
// to esa krne k liye hm ek variable bnayege request = true or iski value jb false hogi jb  2sec se phele means output aane se phele hi person ki value agar hm chng kr denge to.
// race-condition:- 
// agar kisi ek condition k hone se phele hi hmne dusri condition chla dii
//                    or
// kisi ek request k complete hone se phele dusri request chl gyi to phele wali request cancel krdo.

// reactive dependency- > jb react k ander useeffect k sath kaam krte h to vhi s aati h reactive dependency
// how reactive dependency works ?
// hmare component k ander any function,any prop,any state that exist it act as a dependency.
// jb bhi hm useeffect k ander koi bhi chij use kr rhe h koi bhi chij state anything to vo agar yha use nhi hoti to kch lint errors aate h .
