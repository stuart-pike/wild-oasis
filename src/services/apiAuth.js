import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // This method retrieves the current local session (i.e local storage).
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  // Since the unencoded session data is retrieved from the local storage medium, do not rely on it as a source of trusted data on the server. It could be tampered with by the sender. If you need verified, trustworthy user data, call getUser instead.
  const { data, error } = await supabase.auth.getUser();
  //console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
