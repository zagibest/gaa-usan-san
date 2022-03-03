import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Divider,
} from "@chakra-ui/react";
import { db } from "@/lib/firebase/initFirebase";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from "@/lib/firebase/useUser";
import nextId from "react-id-generator";

import { FaArrowLeft } from "react-icons/fa";

export default function Addmember() {
  var htmlId = nextId();
  const { user } = useUser();
  const [nameData, setName] = useState();
  const [lastnameData, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [ageData, setAge] = useState();
  const [sexData, setSex] = useState();
  const [paymentData, setPayment] = useState();
  const [heightData, setHeight] = useState();
  const [weightData, setWeight] = useState();
  const [pressure, setPressure] = useState();
  const [pulse, setPulse] = useState();
  const [vaccination, setVaccination] = useState();
  const [mazok, setMazok] = useState();
  const [horhoi, setHorhoi] = useState();
  const [class1, setClass1] = useState();
  const [class2, setClass2] = useState();
  const [fb, setFb] = useState();
  const [ig, setIg] = useState();
  const [race, setRace] = useState();

  const sendData = async () => {
    try {
      //   const userDoc = doc(db, "admin", user.id);
      const colRef = doc(db, "admin", user.id, "client", htmlId);

      await setDoc(colRef, {
        name: nameData,
        phone: phoneNumber,
        lastname: lastnameData,
        sex: sexData,
        age: ageData,
        payment: paymentData,
        height: heightData,
        weight: weightData,
        pressure: pressure,
        pulse: pulse,
        vaccination: vaccination,
        mazok: mazok,
        horhoi: horhoi,
        race: race,
        class1: class1,
        class2: class2,
        facebook: fb,
        Instagram: ig,
      });
      alert("Амжилттай");
    } catch (error) {
      alert(error);
    }
  };
  if (user) {
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Шинэ бүртгэл
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormLabel fontWeight="bold" fontSize="lg" pb="5">
                Ерөнхий
              </FormLabel>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Нэр</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Овог</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="phoneNumber">
                <FormLabel>Утас</FormLabel>
                <Input
                  type="number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
              <HStack>
                <Box w="49%">
                  <FormControl id="gender">
                    <FormLabel>Хүйс</FormLabel>
                    <Select onChange={(e) => setSex(e.target.value)}>
                      <option>Сонгох</option>
                      <option>Эр</option>
                      <option>Эм</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box w="49%">
                  <FormControl id="age">
                    <FormLabel>Нас</FormLabel>
                    <Input
                      type="number"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="payment">
                <FormLabel>Гишүүнчлэл</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setPayment(e.target.value)}
                  placeholder="он-сар-өдөр -> он-сар-өдөр"
                />
              </FormControl>
              <Divider />

              <FormLabel fontWeight="bold" fontSize="lg" pb="5">
                Эрүүл мэнд
              </FormLabel>

              <HStack>
                <Box>
                  <FormControl id="height">
                    <FormLabel>Өндөр</FormLabel>
                    <Input
                      type="number"
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="weight">
                    <FormLabel>Жин</FormLabel>
                    <Input
                      type="number"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="pressure">
                <FormLabel>Даралт</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setPressure(e.target.value)}
                />
              </FormControl>
              <FormControl id="pulse">
                <FormLabel>Зүрхний цохилт</FormLabel>
                <Input type="text" onChange={(e) => setPulse(e.target.value)} />
              </FormControl>
              <FormControl id="vaccination">
                <FormLabel>Вакцин хийлгэсэн эсэх</FormLabel>
                <Select onChange={(e) => setVaccination(e.target.value)}>
                  <option>Сонгох</option>
                  <option>Үгүй</option>
                  <option>Тийм</option>
                </Select>
              </FormControl>

              <HStack>
                <Box w="49%">
                  <FormControl id="muzok">
                    <FormLabel>Мазок</FormLabel>
                    <Select onChange={(e) => setMazok(e.target.value)}>
                      <option>Сонгох</option>
                      <option>Үгүй</option>
                      <option>Тийм</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box w="49%">
                  <FormControl id="tsagaan">
                    <FormLabel>Цагаан хорхой</FormLabel>
                    <Select onChange={(e) => setHorhoi(e.target.value)}>
                      <option>Сонгох</option>
                      <option>Үгүй</option>
                      <option>Тийм</option>
                    </Select>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="race">
                <FormLabel>Арьс өнгө</FormLabel>
                <Input type="text" onChange={(e) => setRace(e.target.value)} />
              </FormControl>
              <Divider />

              <FormLabel fontWeight="bold" fontSize="lg">
                Бусад
              </FormLabel>
              <FormControl id="class" isRequired>
                <FormLabel>Оролт 1</FormLabel>
                <Select onChange={(e) => setClass1(e.target.value)}>
                  <option>Анги сонгох</option>
                  <option>07:30</option>
                  <option>09:00</option>
                  <option>10:30</option>
                  <option>12:00</option>
                  <option>14:00</option>
                  <option>15:30</option>
                  <option>17:00</option>
                  <option>18:30</option>
                </Select>
              </FormControl>
              <FormControl id="class" isRequired>
                <FormLabel>Оролт 2</FormLabel>
                <Select onChange={(e) => setClass2(e.target.value)}>
                  <option>Анги сонгох</option>
                  <option>07:30</option>
                  <option>09:00</option>
                  <option>10:30</option>
                  <option>12:00</option>
                  <option>14:00</option>
                  <option>15:30</option>
                  <option>17:00</option>
                  <option>18:30</option>
                </Select>
              </FormControl>
              <FormControl id="facebook">
                <FormLabel>Facebook</FormLabel>
                <Input type="text" onChange={(e) => setFb(e.target.value)} />
              </FormControl>
              <FormControl id="instagram">
                <FormLabel>Instagram</FormLabel>
                <Input type="text" onChange={(e) => setIg(e.target.value)} />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={sendData}
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Нэмэх
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  <Link color={"blue.400"} href="/">
                    <Button bg="transparent" leftIcon={<FaArrowLeft />}>
                      Буцах
                    </Button>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  } else {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link color={"blue.400"} href="/">
          <Button bg="transparent" leftIcon={<FaArrowLeft />}>
            Буцах
          </Button>
        </Link>
      </Box>
    );
  }
}

/* string_data: "Benjamin Carlson",
        number_data: 2,
        boolean_data: true,
        map_data: { stringInMap: "Hi", numberInMap: 7 },
        array_data: ["text", 4],
        null_data: null,
        time_stamp: Timestamp.fromDate(new Date("December 17, 1995 03:24:00")),
        geo_point: new GeoPoint(34.714322, -131.468435), */
