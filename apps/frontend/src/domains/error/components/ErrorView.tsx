import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link, useAsyncError, useLocation, useNavigation, useRouteError } from 'react-router-dom';

import { getErrorMessage } from '../error.utils';


type ErrorViewProps = {
	heading?: string;
};

const MotionStack = motion(Stack);

export const ErrorView: React.FC<ErrorViewProps> = ({ heading = 'Error!' }) => {
	const { pathname, search } = useLocation();
	const { state } = useNavigation();
	const routeError = useRouteError();
	const asyncError = useAsyncError();
	const error = routeError || asyncError;

	return (
		<Stack role="alert" flexDirection="column" justifyContent="center" height="$full">
			<Container paddingBlockEnd="32" paddingBlockStart="4">
				<AnimatePresence mode="popLayout">
					{state === 'idle' && (
						<MotionStack
							key={Math.random()}
							initial={{ scale: 0.75, opacity: 0 }}
							animate={{ scale: 1, opacity: 1, transition: { delay: 0.3 } }}
							exit={{ scale: 0.75, opacity: 0 }}
							transition={{
								scale: { type: 'spring', bounce: 0.5, duration: 0.6 },
								opacity: { type: 'tween', ease: 'easeOut', duration: 0.3 },
							}}
							flexDirection="column"
							alignItems="center"
							gap="$3"
						>
							<Heading size="display-lg" as="span">
								😫
							</Heading>
							<Heading size="display-xs">{heading}</Heading>
							<Text size="label-md" color="neutral.500">
								{getErrorMessage(error)}
							</Text>
							<Button width={176} as={Link} to={[pathname, search].join('')}>
								Retry
							</Button>
							{import.meta.env.DEV && (
								<Stack color="error.dark" flexDirection="column" maxW="calc(100% - 1rem)">
									<Heading size="sm" textTransform="uppercase">Dev error</Heading>
									<Box
										backgroundColor="#ffeeee"
										padding={2}
										border="solid"
										borderColor="red"
										maxH="20rem"
										overflow="scroll"
									>
										<pre>{JSON.stringify(error, null, 2)}</pre>
									</Box>
								</Stack>
							)}
						</MotionStack>
					)}
				</AnimatePresence>
			</Container>
		</Stack>
	);
};
