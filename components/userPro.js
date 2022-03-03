import { Box, Text } from "@chakra-ui/react";

export default function UserPro(props) {
  return (
    <Box
      backdropBlur="md"
      bg="transparent"
      position="absolute"
      t="0"
      b="0"
      left="0"
      right="0"
      zIndex="1"
    >
      <Box m="auto">
        <Box p="10">
          <Box display="flex" pb="5">
            <Box>
              <Text>Нэр: </Text>
              <Text>{props.name}</Text>
            </Box>
            <Box>
              <Text>Овог: </Text>
              <Text>{props.lastName}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Нас: </Text>
              <Text>{props.age}</Text>
            </Box>
            <Box>
              <Text>Хүйс: </Text>
              <Text>{props.sex}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Утас: </Text>
              <Text>{props.phoneNumber}</Text>
            </Box>
            <Box>
              <Text>Төлбөр: </Text>
              <Text>{props.payment}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Өндөр: </Text>
              <Text>{props.height}</Text>
            </Box>
            <Box>
              <Text>Жин: </Text>
              <Text>{props.weight}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Даралт: </Text>
              <Text>{props.pressure}</Text>
            </Box>
            <Box>
              <Text>Зүрхний цохилт: </Text>
              <Text>{props.pulse}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Вакцин: </Text>
              <Text>{props.vaccination}</Text>
            </Box>
            <Box>
              <Text>Арьс өнгө: </Text>
              <Text>{props.race}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Цагаан хорхой: </Text>
              <Text>{props.horhoi}</Text>
            </Box>
            <Box>
              <Text>Мазок: </Text>
              <Text>{props.mazok}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Анги 1: </Text>
              <Text>{props.class1}</Text>
            </Box>
            <Box>
              <Text>Анги 2: </Text>
              <Text>{props.class2}</Text>
            </Box>
          </Box>
          <Box display="flex" pb="5">
            <Box>
              <Text>Facebook: </Text>
              <Text>{props.facebook}</Text>
            </Box>
            <Box>
              <Text>Instagram: </Text>
              <Text>{props.instagram}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
