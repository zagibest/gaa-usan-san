import { useUser } from "@/lib/firebase/useUser";
import { FaUser } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Gtable from "@/components/Table";
import { FaSearch, FaPlus } from "react-icons/fa";
import { db } from "@/lib/firebase/initFirebase";
import { doc, getDocs, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import UserPro from "@/components/userPro";

export default function Home() {
  const { user } = useUser();
  const [userlist, setUserList] = useState();
  const [isShow, setIsShow] = useState(false);
  const [selectUser, setSelectUser] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (user) {
      onSnapshot(collection(db, "admin", user.id, "client"), (snapshot) =>
        setUserList(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }), [])
        )
      );
    }
  });

  const rows = userlist
    ?.filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((item) => {
      return (
        <Gtable
          key={item.id}
          id={item.id}
          name={item.name}
          payment={item.payment}
          lastName={item.lastname}
          phoneNumber={item.phone}
          setIsShow={setIsShow}
          setSelectUser={setSelectUser}
          age={item.age}
          sex={item.sex}
          height={item.height}
          weigth={item.weight}
          pulse={item.pulse}
          pressure={item.pressure}
          vaccination={item.vaccination}
          race={item.race}
          horhoi={item.horhoi}
          mazok={item.mazok}
          class1={item.class1}
          class2={item.class2}
          fb={item.facebook}
          ig={item.Instagram}
        />
      );
    });

  if (user) {
    return (
      <Box>
        <Stack w="100vw" minH="100vh" alignItems="center">
          <Navbar />
          <Flex
            w={{ md: "90%", base: "95%" }}
            justifyContent="space-between"
            pb="5"
          >
            <InputGroup>
              <InputLeftElement>
                <FaSearch color="#4299e1" />
              </InputLeftElement>
              <Input
                placeholder="Хайх"
                w="40"
                borderColor="blue.100"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              ></Input>
            </InputGroup>
            <Link href="/addnewclient">
              <Button
                bg="blue.400"
                color="white"
                px="2.5"
                py="2.5"
                rightIcon={<FaPlus color="white" />}
                size={{ md: "md", base: "sm" }}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Бүртгэл нэмэх
              </Button>
            </Link>
          </Flex>
          <Box overflowX="auto" w="100%">
            <Table
              variant="striped"
              w={{ md: "90%", base: "100%" }}
              mx="auto"
              colorScheme="gray"
              size="sm"
              overflowX="scroll"
            >
              <Thead>
                <Tr>
                  <Th>Овог</Th>
                  <Th>Нэр</Th>
                  <Th>Утас</Th>
                  <Th>Гишүүнчлэл</Th>
                  <Th>Дэлгэрэнгүй</Th>
                  <Th>Ирц</Th>
                </Tr>
              </Thead>
              <Tbody>{rows}</Tbody>
            </Table>
          </Box>
        </Stack>
        <Modal isOpen={isShow} onClose={() => setIsShow(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Үйлчлүүлэгч</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text pr="2" opacity="0.5">
                    Нэр:{" "}
                  </Text>
                  <Text fontWeight="bold">
                    {selectUser && selectUser.name && selectUser.name}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text pr="2" opacity="0.5">
                    Овог:{" "}
                  </Text>
                  <Text fontWeight="bold">
                    {selectUser && selectUser.lastName && selectUser.lastName}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Нас: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.age && selectUser.age}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Хүйс: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.sex && selectUser.sex}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Утас: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser &&
                      selectUser.phoneNumber &&
                      selectUser.phoneNumber}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Төлбөр: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.payment && selectUser.payment}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Өндөр: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.height && selectUser.height}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Жин: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.weigth && selectUser.weigth}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Даралт: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.pressure && selectUser.pressure}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Зүрхний цохилт: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.pulse && selectUser.pulse}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Вакцин: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser &&
                      selectUser.vaccination &&
                      selectUser.vaccination}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Арьс өнгө: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.race && selectUser.race}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Цагаан хорхой: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.horhoi && selectUser.horhoi}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Мазок: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.mazok && selectUser.mazok}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Анги 1: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.class1 && selectUser.class1}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Анги 2: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.class2 && selectUser.class2}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" pb="5">
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Facebook: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.fb && selectUser.fb}
                  </Text>
                </Box>
                <Box display="flex" flex="1">
                  <Text opacity="0.5">Instagram: </Text>
                  <Text fontWeight="bold" pl="2">
                    {selectUser && selectUser.ig && selectUser.ig}
                  </Text>
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setIsShow(false)}
              >
                Хаах
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  } else
    return (
      <Box
        display="flex"
        minH="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-r, cyan.400, blue.400)"
      >
        <Box textAlign="center" maxW="960" mb="20">
          <Text
            color="white"
            mb="10"
            fontSize={{ md: "6xl", base: "3xl" }}
            fontWeight="extrabold"
          >
            Алтай Усан Спорт Чийрэгжүүлэлтийн Газар
          </Text>
          <Link href="/auth">
            <Button size="lg" leftIcon={<FaUser />}>
              Нэвтрэх
            </Button>
          </Link>
        </Box>
        <Text position="absolute" bottom="10%" color="whiteAlpha.500">
          ©2022 - Developed by{" "}
          <Link
            href="https://zagi.live/"
            position="inline"
            target="_blank"
            isExternal
          >
            Zagi
          </Link>
        </Text>
      </Box>
    );
}

/*
<div className={styles.container}>
        <Card>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <hr />
            {user.profilePic ? (
              <image src={user.profilePic} height={100} width={100}></image>
            ) : (
              <p>No profile pic</p>
            )}
            <hr />
            <WriteToCloudFirestore />
            <ReadDataFromCloudFirestore />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button onClick={() => logout()} style={{ width: "100px" }}>
                Log Out
              </Button>
              <a
                href="https://github.com/bjcarlson42/nextjs-with-firebase"
                target="_blank"
              >
                <Button variant="outline-secondary" style={{ width: "100px" }}>
                  Code
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
*/

// <Modal isOpen={isOpen} onClose={onClose} key={item.id}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Modal Title</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Нэр: </Text>
//                   <Text>{item.name}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Овог: </Text>
//                   <Text>{item.lastName}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Нас: </Text>
//                   <Text>{item.age}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Хүйс: </Text>
//                   <Text>{item.sex}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Утас: </Text>
//                   <Text>{item.phoneNumber}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Төлбөр: </Text>
//                   <Text>{item.payment}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Өндөр: </Text>
//                   <Text>{item.height}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Жин: </Text>
//                   <Text>{item.weight}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Даралт: </Text>
//                   <Text>{item.pressure}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Зүрхний цохилт: </Text>
//                   <Text>{item.pulse}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Вакцин: </Text>
//                   <Text>{item.vaccination}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Арьс өнгө: </Text>
//                   <Text>{item.race}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Цагаан хорхой: </Text>
//                   <Text>{item.horhoi}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Мазок: </Text>
//                   <Text>{item.mazok}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Анги 1: </Text>
//                   <Text>{item.class1}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Анги 2: </Text>
//                   <Text>{item.class2}</Text>
//                 </Box>
//               </Box>
//               <Box display="flex" pb="5">
//                 <Box>
//                   <Text>Facebook: </Text>
//                   <Text>{item.facebook}</Text>
//                 </Box>
//                 <Box>
//                   <Text>Instagram: </Text>
//                   <Text>{item.instagram}</Text>
//                 </Box>
//               </Box>
//             </ModalBody>

//             <ModalFooter>
//               <Button colorScheme="blue" mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button variant="ghost">Secondary Action</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
