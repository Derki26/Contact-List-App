import { ContactProvider, useContactContext } from './ContactContext';
import Contact from './components/Contact';
import AddContact from './components/AddContact';
import "./App.css";

function App() {
  return (
    <ContactProvider>
       <div className="flex items-center justify-center h-screen mx-auto">
      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mx-auto">
      <div className="card-body mx-auto"> 
      <div className="form-control">
        <h1 className="text-3xl font-bold mb-8 text-primary">Contact List</h1>
        <AddContact />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Contacts</h2>
          <ContactList />
        </div>
        </div>
      </div>
      </div> 
     </div> 
    </ContactProvider>
  );
}

const ContactList = () => {
  const { state } = useContactContext();

  return (
    <div>
      {state.contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default App;

