import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import './App.css'

function App() {
    const users = [
      
    {
     img:'https://media.istockphoto.com/id/1303762920/photo/asian-young-student-man-entrepreneur-talking-on-mobile-phone-woking-with-computer-at-home.jpg?s=2048x2048&w=is&k=20&c=fO3r8Ey4dNBZBslwb0JMqRbAFew5H1zJ6JQcfQQgsXc='
     ,tag:"Satisfied"
    },
    {
      img:'https://media.istockphoto.com/id/696318028/photo/asian-women-woking-at-the-cafe-with-laptop-and-writing-note-thinking-business-project-action.jpg?s=2048x2048&w=is&k=20&c=2PTe_ruSIfTZa-DbbMzEAtN7ZqxLdK0f60nZF6J1u9g='
    ,tag:'Average'
    },{
      img:'https://media.istockphoto.com/id/1216090995/photo/creative-woman-using-typing-on-computer-laptop-that-putting-on-wooden-working-desk-with.jpg?s=2048x2048&w=is&k=20&c=yNfe6c8vkKVqk7fA0ML6vgGz7N4f6CgFQdPEZZ9GYtg=',
      tag:'good'
    }
  ];

  return (
    <>
    <Section1  users={users}/>
    <Section2 />
    </>
  )
}

export default App
